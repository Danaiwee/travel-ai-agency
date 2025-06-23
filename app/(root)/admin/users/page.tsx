import Header from "@/components/header/Header";
import PagePagination from "@/components/pagination/PagePagination";
import UsersTable from "@/components/table/UsersTable";
import { ROUTES } from "@/constants/routes";
import { getUsers } from "@/lib/actions/user.action";

const UsersPage = async ({ searchParams }: RouteParams) => {
  const { page, pageSize } = await searchParams;
  const { data } = await getUsers({
    page: Number(page) || 1,
    pageSize: Number(pageSize) || 10,
  });

  const { users } = data || {};

  console.log(users);

  return (
    <article className="article-container">
      <Header
        title="Manage Users"
        description="Filter, sort and access detailed users profiles"
        buttonText="Add new user"
        btnLink={ROUTES.CREATEUSER}
      />

      <section className="container">
        <UsersTable users={users} />
      </section>

      <section className="mt-10">
        <PagePagination />
      </section>
    </article>
  );
};

export default UsersPage;
