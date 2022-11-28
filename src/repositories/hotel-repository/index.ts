import { prisma } from "@/config";

async function findHotels() {
  return prisma.hotel.findMany();
}

async function getHotelRooms(hotelId: string) {
  return prisma.hotel.findFirst({
    where: { id: Number(hotelId) },
    include: {
      Rooms: true,
    },
  });
}

const hotelRepository = {
  findHotels,
  getHotelRooms,
};

export default hotelRepository;
