export default function (dataSeries) {
    let outLastPxData=[]
    dataSeries.forEach((data,idx)=>{
        let codeDateTime = data['CodeStruiDateTime']
        let dtime = codeDateTime.substring(6)

        let  lastPx = {
            name: dtime,
            value: [idx, data['uiLastPx']]
        }
        outLastPxData.push(lastPx)
    })
    // console.log('serializeData')
    // console.log(outLastPxData)
    return outLastPxData

}
