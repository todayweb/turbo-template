import { prisma } from "@repo/db";
import UsersTable from "./components/UsersTable";
import { AdministrationProvider } from "./providers/AdministrationProvider";

export default async function Administration() {
  const users = await prisma.user.findMany({
    select: {
      id: true,
      email: true,
      role: true,
    },
  });

  return (
    <AdministrationProvider data={users}>
      <UsersTable />
    </AdministrationProvider>
  );
}
