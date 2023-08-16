import { userRepository } from "@/repositories/user_repository"

export type User = {
  id: string
  name: string
  belonging: string
}

export const userFactory = () => {
  const repository = userRepository
  return {
    index: async (): Promise<User[]> => {
      const response = await repository.getUsers()
      return response
    }
  }
}