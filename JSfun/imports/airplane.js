export let availableAirplanes = [{
  name: 'AeroJet',
  availableStaff:['pilots', 'flightAttendants', 'engineers', 'medicalAssistance', 'sensorOperators'],
  fuelCapacity: 800,
  maxSpeed:1200,
  minSpeed:300
 }, 
 {
  name: 'SkyJet',
  availableStaff:['pilots', 'flightAttendants'],
  fuelCapacity: 500,
  maxSpeed:800,
  minSpeed:200
 }];
export let flightRequirements = {
  requiredSpeedRange:700,
  requiredStaff: 4
};
export function meetsStaffRequirements(availableStaff, requiredStaff){
  if (availableStaff.length > requiredStaff) {
    return true;
  } else {
    return false;
  }
};
function meetsSpeedRangeRequirements( maxSpeed, minSpeed, requiredSpeedRange ){
  let range = maxSpeed - minSpeed;
  if (range > requiredSpeedRange) {
    return true;
  } else {
    return false;
  }
};
export default meetsSpeedRangeRequirements;