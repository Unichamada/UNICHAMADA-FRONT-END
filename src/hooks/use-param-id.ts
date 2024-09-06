import { useParams } from "next/navigation";

export function useParamId() {
    const params = useParams();
    const id = Number(params.id);

    return id;
}
