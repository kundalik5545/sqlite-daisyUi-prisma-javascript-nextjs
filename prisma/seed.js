import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// Simple random comment generator
const commentsText = [
  "This is great!",
  "Nice work 👍",
  "I disagree 🤔",
  "Could you explain more?",
  "Awesome post 🚀",
  "Thanks for sharing!",
  "Interesting perspective...",
  "I love this idea 💡",
  "Not sure about this",
  "Cool!",
  "Very helpful 🙌",
  "Needs improvement",
  "Good explanation",
  "So true!",
  "👏👏👏",
];

async function main() {
  // Create 5 users
  const users = await Promise.all(
    Array.from({ length: 5 }).map((_, i) =>
      prisma.users.create({
        data: {
          email: `user${i + 1}@example.com`,
          firstName: `User${i + 1}`,
          lastName: `Test`,
        },
      })
    )
  );

  users.map((item) => item.id);

  // Create 15 comments randomly assigned to the users
  await Promise.all(
    Array.from({ length: 15 }).map(() =>
      prisma.comments.create({
        data: {
          comments:
            commentsText[Math.floor(Math.random() * commentsText.length)],
          users: {
            connect: { id: users[Math.floor(Math.random() * users.length)].id },
          },
        },
      })
    )
  );
}

main()
  .then(() => {
    console.log("✅ Database has been seeded.");
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
