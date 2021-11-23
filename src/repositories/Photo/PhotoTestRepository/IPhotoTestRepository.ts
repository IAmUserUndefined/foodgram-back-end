import { Photo } from "../../../entities/Photo";

interface IPhotoTestRepository {
    createTestPhoto(): Promise<void>;
    deleteTestPhoto(): Promise<void>;
    getPhotos(userId: string): Promise<Photo[]>;
}

export default IPhotoTestRepository;