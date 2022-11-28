import { prisma } from "@/config";

async function findHotels() {
  return prisma.hotel.findFirst();
}

const hotelRepository = {
  findHotels,
};

export default hotelRepository;
