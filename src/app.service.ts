import { Injectable } from '@nestjs/common';
import { Product } from '@prisma/client';
import { PrismaService } from './prisma/prisma.service';

@Injectable()
export class AppService {
  constructor(private readonly prisma: PrismaService) {}

  getProducts(): Promise<Product[]> {
    return this.prisma.product.findMany({ take: 10 });
  }
}
