const computerAnalyzer = (compObject) => {
  console.log(`<section id="computer--${compObject.id}"> `);
  console.log(` <h1>${compObject.manufacturer} ${compObject.make}</h1>`)
  console.log(` <div>Model: ${compObject.model}`)
  console.log(` <div>Memory: ${compObject.specs.memory} GB</div>`)
  console.log(` <div>Hard drive space: ${compObject.specs.hardDrive}</div>`)
  console.log(` <div>Processor speed: ${compObject.specs.processor} Ghz</div>`)
  console.log(`</section>`)
}


const computer = {
	id: 1,
	manufacturer: "Apple",
	make: "Macbook",
	model: "Pro",
	specs: {
		memory: 32,
		hardDrive: "500 GB",
		processor: 2.4
	}
}

computerAnalyzer(computer);