import { Product } from "../../services/products/entity";
import { Repository } from "typeorm";

export interface Context {
    products: Repository<Product>,
}