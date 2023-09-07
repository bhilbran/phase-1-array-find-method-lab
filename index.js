// code your solution here
function superbowlWin(records) {
    console.log(records)
        
    let superbowlWin = records.find(record => record.result === "W");
  if (superbowlWin) {
    return superbowlWin.year;
  } else {
    return (undefined)
  }
}
    
