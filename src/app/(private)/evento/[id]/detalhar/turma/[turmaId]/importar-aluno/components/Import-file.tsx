import React from "react";
import { InboxOutlined } from "@ant-design/icons";
import type { UploadProps } from "antd";
import { message, Upload } from "antd";

const { Dragger } = Upload;

const props: UploadProps = {
    name: "file",
    multiple: true,
    action: "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",
    onChange(info) {
        const { status } = info.file;
        if (status !== "uploading") {
            console.log(info.file, info.fileList);
        }
        if (status === "done") {
            message.success(`${info.file.name} Arquivo enviado com sucesso!.`);
        } else if (status === "error") {
            message.error(`${info.file.name} Falha ao enviar arquivo!.`);
        }
    },
    onDrop(e) {
        console.log("Dropped files", e.dataTransfer.files);
    },
};

const ImportFile: React.FC = () => (
    <Dragger {...props}>
        <p className="ant-upload-drag-icon">
            <InboxOutlined />
        </p>
        <p className="ant-upload-text">
            Clique ou arraste o arquivo para esta área para fazer upload
        </p>
        <p className="ant-upload-hint">
            Certifique-se de fazer upload de arquivos que terminam com .xlsx
        </p>
    </Dragger>
);

export default ImportFile;
