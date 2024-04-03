import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

type Props ={
    title:string;
};

export const Header =({
    title
}: Props) => {
    return (
        <div className="sticky top-0 bg-white pb-3 lg:pt-[28px] flex items-center justify-between border-b-2 lg:mt-[-28px] mb-5 text-neutral-400 lg:z-50">
            <Link href={"/cources"}>
                <Button>
                    <ArrowLeft className="h-5 w-5 stroke-2 text-neutral-400"/>
                </Button>
            </Link>
            <h1 className="font-bld text-lg">
                {title}
            </h1>
            <div/>
        </div>
    )
}