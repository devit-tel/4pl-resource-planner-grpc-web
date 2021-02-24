const client = require("../dist/index");
const coordinatorMessage = require("../dist/protos/coordinator/coordinator_pb");
const google_protobuf_struct_pb = require("google-protobuf/google/protobuf/struct_pb");

const c = client.newCoordinatorClient("localhost:9081");

const rule = new coordinatorMessage.Rule();
rule.setName("my rule");
rule.setInput(
  google_protobuf_struct_pb.Struct.fromJavaScript({
    companyId: "5e3a424d63f0f2f51f3f539b",
    vehicleTypes: ["Motorcycle", "Pickup"],
  })
);
rule.setScript(`
var projects = authenticationProjectFind({company: input.companyId}, 1)
if (!projects.length) {
  throw new Error("projects not found")
}

var contracts = projects[0].contract
var matchesContacts = contracts.filter(function(contract){
  return contract.vehicleTypes.filter(function(vehicleType){
    return _.contains(input.vehicleTypes, vehicleType.name)
  }).length
})

if (!matchesContacts.length) {
  throw new Error("no contacts matched")
}

// sort then set result
result = _.sortBy(matchesContacts, function(contact){
  return contact.priority
})
`);

c.setScoutRule(rule, () => {
  console.log("done");
});
