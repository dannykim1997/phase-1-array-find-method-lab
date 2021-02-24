// const record = [
//     {year: "2018", result: "L"},
//     {year: "2017", result: "W"},
//     {year: "2016", result: "N/A"}
// ]

// function superbowlWin(record) {
//    const Win = record.find ( ( {result} ) => result === "W" )
//    return Win ? Win.year : undefined
// }


function superbowlWin(record) {
    const Win = record.find((recordEntry) => recordEntry.result === "W")
    return Win ? Win.year : undefined
}
