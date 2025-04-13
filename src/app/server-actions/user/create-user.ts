"use server";

import { userRequired } from "@/app/data/user/is-user-authenticated";
import { db } from "@/lib/prisma";
import { userSchema, UserSchemaType } from "@/schemas/user/userSchema";

export const createUser = async (data: UserSchemaType) => {
  try {
    const { user } = await userRequired();

    const validateData = userSchema.parse(data);

    const userData = await db.user.create({
      data: {
        ...validateData,
        image: user?.picture,
        onboardingCompleted: true,
        subscription: {
          create: {
            currentPeriodEnd: new Date(),
            cancelAtPeriodEnd: true,
          },
        },
      },
    });

    return { data: userData };
  } catch (error) {
    console.log(error);
    return { data: undefined, error: "Error fetching create user" };
  }
};
