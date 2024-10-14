module.exports = {
	name: "Sample", // optional, falls back to object key
	description: "The default sites that get tested",
	options: {
		runs: 1,
		frequency: 1, // (in minutes)
	},
	urls: [
		"https://www.maximaformacion.es/blog-ciencia-datos/",
		"https://www.maximaformacion.es/blog-teleformacion/",
		"https://www.maximaformacion.es/curso/",
		"https://www.maximaformacion.es/curso/curso-moodle-para-docentes-con-exelearning/",
		"https://www.maximaformacion.es/",
		"https://www.maximaformacion.es/masters/master-de-estadistica-aplicada-con-r-software/",
		"https://www.maximaformacion.es/masters/",
		"https://www.maximaformacion.es/recursos/"
	]
};
