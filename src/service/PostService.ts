import { CrudService } from "./CrudService";
import { Post } from "../models/Post"
import { user as mockedUser } from '../mocked_data';
import { allUser as allmockedUser } from '../mocked_data';

export class PostService implements CrudService<Post> {
    getAll(): Post[] {
        return undefined
    }
    getOne(id: number): Post {
        return
    }
    postOne(object: Post): void {
        return undefined
    }
    updateOne(id: number, object: Post): Post {
        return undefined
    }
    deleteOne(id: number): Boolean {
        return undefined
    }

}