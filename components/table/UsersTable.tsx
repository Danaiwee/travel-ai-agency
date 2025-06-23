import Image from "next/image";

import { cn, formatDate } from "@/lib/utils";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

const UsersTable = ({ users }: { users: User[] | undefined }) => {
  return (
    <>
      <Table className="table">
        <TableCaption className="hidden">
          A list of users in Touristo
        </TableCaption>
        <TableHeader className="h-15">
          <TableRow>
            <TableHead className="table-head">Name</TableHead>
            <TableHead className="table-head">Email Address</TableHead>
            <TableHead className="table-head">Dated Joined</TableHead>
            <TableHead className="table-head">Itinerary Created</TableHead>
            <TableHead className="table-head">Status</TableHead>
            <TableHead className="table-head">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users &&
            users.map((user, index) => (
              <TableRow
                key={user._id}
                className={cn(index % 2 === 0 ? "bg-gray-50" : "", "h-20")}
              >
                <TableCell>
                  <div className="flex items-center gap-2 min-w-[220px]">
                    <Image
                      src={user.image || "/icons/profile-avatar.webp"}
                      width={40}
                      height={40}
                      alt="Profile image"
                      className="rounded-full"
                    />
                    <p className="table-name">{user.name}</p>
                  </div>
                </TableCell>
                <TableCell className="table-content">{user.email}</TableCell>
                <TableCell className="table-content">
                  {formatDate(user.createdAt)}
                </TableCell>
                <TableCell className="table-content">
                  {user.itineraryCreated || 0}
                </TableCell>
                <TableCell className="table-content">
                  <p
                    className={cn(
                      user.status.toLowerCase() === "admin"
                        ? "table-status-admin"
                        : "table-status-user"
                    )}
                  >
                    {user.status}
                  </p>
                </TableCell>
                <TableCell className="table-content">
                  <Image
                    src="/icons/trash-bin.png"
                    width={20}
                    height={20}
                    alt="Trash icon"
                    className="cursor-pointer"
                  />
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </>
  );
};

export default UsersTable;
