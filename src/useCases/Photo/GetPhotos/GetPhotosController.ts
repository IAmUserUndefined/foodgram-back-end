/* eslint-disable @typescript-eslint/no-unused-vars */

import { ok } from "../../../adapter/adapterResponses/adapterResponses";
import IRequestRouters from "../../../adapter/interfaces/IRequestRouters";
import GetPhotosRules from "./GetPhotosRules";

export default new class GetPhotosController {
    
	async handle(request: IRequestRouters){

		const getPhotosRules = new GetPhotosRules();

		const response = await getPhotosRules.execute();

		return ok(response);
	}
};