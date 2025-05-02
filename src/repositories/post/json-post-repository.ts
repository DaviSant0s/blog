import { PostModel } from "@/models/post/post-model";
import { PostRepository } from "./post-repository";
import { resolve } from "path";
import { readFile } from "fs/promises";

const ROOT_DIR = process.cwd();

const JSON_POSTS_FILE_PATH = resolve(
  ROOT_DIR,
  "src",
  "db",
  "seed",
  "posts.json"
);

export class JsonPostRepository implements PostRepository {
  private async readFromDisk(): Promise<PostModel[]> {
    const jsonContent = await readFile(JSON_POSTS_FILE_PATH, "utf-8");
    const parseJson = JSON.parse(jsonContent);
    return parseJson.posts;
  }

  public async findAll(): Promise<PostModel[]> {
    return await this.readFromDisk();
  }

  public async findById(id: string): Promise<PostModel> {
    const posts = await this.findAll();
    const post = posts.find(post => id === post.id);

    if(!post) throw new Error('Post não encontrado');

    return post;

  }
}

export const postRepository: PostRepository = new JsonPostRepository();
