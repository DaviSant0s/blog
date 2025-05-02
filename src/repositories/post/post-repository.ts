import { PostModel } from "@/models/post/post-model";

export interface PostRepository {
  findAll(): Promise<PostModel[]>; // Essa promisse vai ser um array de posts
  findById(id: string): Promise<PostModel>;
}
