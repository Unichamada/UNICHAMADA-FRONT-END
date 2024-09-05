"use client";

import React from "react";
import { Button, Table, Select } from "antd";

export default function AdicionarChamada() {
    const alunos = [
        { matricula: "1111111", aluno: "marketing", situacao: "Presente" },
        { matricula: "2222222", aluno: "pajé", situacao: "Ausente" },
    ];

    const columns = [
        {
            title: 'Matrícula',
            dataIndex: 'matricula',
            key: 'matricula',
        },
        {
            title: 'Aluno',
            dataIndex: 'aluno',
            key: 'aluno',
        },
        {
            title: 'Situação',
            dataIndex: 'situacao',
            key: 'situacao',
            render: (situacao: any) => (
                <Select
                    value={situacao}
                    options={[
                        { label: 'Presente', value: 'Presente' },
                        { label: 'Ausente', value: 'Ausente' },
                    ]}
                />
            ),
        },
    ];

    return (
        <div className="flex bg-white items-center justify-center min-h-screen mx-auto p-4">
            <div className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-lg">
                <Button
                    className="mb-4 bg-blue-500 text-white hover:bg-blue-600"
                    type="primary"
                >
                    Adicionar Chamada
                </Button>

                <Table
                    dataSource={alunos}
                    columns={columns}
                    rowKey={(record) => record.matricula}
                    pagination={false}
                />
            </div>
        </div>
    );
}
