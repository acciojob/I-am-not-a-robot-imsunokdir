
let verify = document.getElementById("verify");
let res = document.getElementById("para");
function generateRandomNumber(){
  const random = Math.floor(Math.random() * 5)+1;
  return random
}
// function renderImages(){
	const imageContainer = document.querySelector('main');
	let images = Array.from(imageContainer.querySelectorAll("img"))
	let randN1 = generateRandomNumber();
	let newImg = document.createElement("img");
	newImg.classList.add(`img${randN1}`)
	let randN2 = generateRandomNumber();
	let targetEle = document.querySelector(`.img:nth-child(${randN2})`);
	imageContainer.insertBefore(newImg, targetEle)
	images.splice(randN2,0,newImg)
	for(let i=0;i<images.length;i++){
		const j = Math.floor(Math.random() * (i + 1));
		[images[i], images[j]] = [images[j], images[i]];
	}
	imageContainer.innerHTML = '';
	images.forEach(img => imageContainer.appendChild(img));

	let sum=0;
	let selectedArr = []
	for(let i=0;i<images.length;i++){
		images[i].addEventListener('click',()=>{
			if(!selectedArr.includes(images[i])){
			sum+=1;
			console.log("sum::",sum)
			images[i].classList.add("selected");
			if(sum <=2){
				selectedArr.push(images[i])
				if(sum==2){
					verify.style.display="block"
					verify.addEventListener("click",()=>{
						if(selectedArr[0].className === selectedArr[1].className){
						res.innerText = "You are a human. Congratulations!"
					}else{
							res.innerText="We can't verify you as a human. You selected the non-identical tiles."
					}
					}) 
				}
				
			}else{
				document.getElementById("verify").style.display="none"
			}
		}
			
		})
	}
	const reset = document.getElementById("reset");
	reset.addEventListener('click',()=>{
		for(i of images){
			i.classList.remove("selected")
		}
		sum=0;
		document.getElementById("verify").style.display="none";
		res.innerText=""
		selectedArr=[]
	})
// }
// renderImages()








