import { Photo } from "../../../entities/Photo";

interface IPhotoRepository {
    store(id: string, userId: string, url: string, originalname: string, filename: string): Promise<void>,
    getPhotos(): Promise<Photo[]>,
    getUserPhotos(userId: string): Promise<Photo[]>,
    destroy(id: string): Promise<void>
}

export default IPhotoRepository;