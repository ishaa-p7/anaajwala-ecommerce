import React from "react";
import { Table } from "flowbite-react";

function UserTable({ users }) {
    return (
        <div className="overflow-x-auto p-40 pt-0">
            <Table hoverable>
                <Table.Head>
                    <Table.HeadCell>Username</Table.HeadCell>
                    <Table.HeadCell>Contact Number</Table.HeadCell>
                    <Table.HeadCell>Email</Table.HeadCell>
                    <Table.HeadCell>Orders</Table.HeadCell>
                    {/* <Table.HeadCell>
                        <span className="sr-only">Edit</span>
                    </Table.HeadCell> */}
                </Table.Head>
                <Table.Body className="divide-y">
                    {users &&
                        users.length > 0 &&
                        users.map((user) => (
                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    {user.username}
                                </Table.Cell>
                                <Table.Cell>{user.phone_no}</Table.Cell>
                                <Table.Cell>{user.email}</Table.Cell>
                                <Table.Cell>{user.orders.length}</Table.Cell>
                                {/* <Table.Cell>
                                    <a
                                        href="#"
                                        className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                                    >
                                        Edit
                                    </a>
                                </Table.Cell> */}
                            </Table.Row>
                        ))}
                </Table.Body>
            </Table>
        </div>
    );
}

export default UserTable;
