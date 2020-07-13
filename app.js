const url = 'http://www.nokeynoshade.party/api/queens/all'

const getDragQueen = async () => {
  try {
    const response = await axios.get(url)

    const ariesQ = response.data[30]
    const taurusQ = response.data[71]
    const geminiQ = response.data[106]
    const cancerQ = response.data[73]
    const leoQ = response.data[54]
    const virgoQ = response.data[31]
    const libraQ = response.data[111]
    const scorpioQ = response.data[139]
    const sagittariusQ = response.data[82]
    const capricornQ = response.data[44]
    const aquariusQ = response.data[99]
    const piscesQ = response.data[83]

    console.log(piscesQ)
  }
  catch (error) {
    console.log(`Your error is ${error}`)
  }
}

getDragQueen()