const allFeatures = document.querySelectorAll('.js-feature')
const Feature = Array.from(allFeatures)
let outIndex
const originalText = [
 "Worried about your health or family but scared of the bill? iWello is here for you to provide affordable checkup and treatment for non-emergency illnesses. It's not too late to get a checkup and treatment for a healthier life and you can be rest assured we've got your back all the way.",

 'At iWello, we understand that sometimes life happens and unexpected medical situations might happen that threaten to overwhelm you and your purse. At iWello, we perfectly understand and no matter the income class, we can assure you of getting your medical emergency surgery funded so you can get your life back!',
 ' We are more than consultation and treatment at iWello. At iWello, we make sure to help you know if the drugs you and your loved ones are taking are safe almost instantly with the iWello Free Fake drug checker.',

 " Getting care from a licensed medical doctor is a big step. iWello helps you get there faster than ever before with our pay as you go below the $1 consultation fee. No more struggling to find the right medical advice when you need it. iWello provides a secure online network of doctors across the country which eases the significant cost barriers that patients now face when seeking care at specialists' offices. As a result, patients are able to get care at less expensive places with better outcomes  than 70% of  companies that offer the same.",
 ' We are more than consultation and treatment at iWello. At iWello, we make sure to help you know if the drugs you and your loved ones are taking are safe almost instantly with the iWello Free Fake drug checker.',
]

allFeatures.forEach((feature, index) => {
 const paraGraph = feature.querySelector('p')

 // Create New a Tag
 let aTag = document.createElement('a')
 const text = document.createTextNode('Read More')
 aTag.appendChild(text)
 aTag.classList.add('read-more')
 // Create New a Tag

 // Create New Tag
 feature.appendChild(aTag)
 console.log('hety')
 paraGraph.innerText = paraGraph.innerText.slice(0, 200) + `... `

 feature.addEventListener('focus', () => {
     console.log("focus")
 })

 aTag.addEventListener('click', () => {
  console.log('CLicked')
  feature.style.height = 'auto'
  feature.style.transition = 'height 0.3s'
  paraGraph.innerText = originalText[index]
  console.log(index)
  aTag.style.display = 'none'
  return
 })
})
