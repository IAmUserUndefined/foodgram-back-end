import { InvalidParamError } from "../utils/errors/index";

import path from "path";
import multer from "multer";

const multerConfig = {

	dest: path.resolve(__dirname, "..", "utils", "tmp"),

	storage: multer.diskStorage({

		destination: (req, file, callback) => callback(null, "src/utils/tmp"),

		filename: (req, file, callback) => callback(null, `${Date.now()}-${file.originalname}`)
        
	}),

	limits: { fileSize: 1024 * 1024 },

	fileFilter: (req, file, callback) => {
      
		const allowedTypes = [
			"image/jpeg",
			"image/png"
		];

		if (allowedTypes.includes(file.mimetype)) 
			return callback(null, true);

		callback(new InvalidParamError("Tipo de Arquivo inválido, a imagem precisa estar em formato JPEG ou PNG"));

	}
};

module.exports = multer(multerConfig).single("file");