import {FC} from "react";
import {GetStaticPaths, GetStaticProps} from "next";
import fs from 'fs';
import * as Buffer from "buffer";

export const getStaticPaths: GetStaticPaths = () => {
    return {
        paths: [],
        fallback: "blocking",
    }
}

export const getStaticProps: GetStaticProps = async () => {
    const p = new Promise<Buffer.Buffer>((resolve, reject) => fs.readFile('public/detail.json', (err, data) => {
        if (err) {
            reject(err);
        }

        resolve(data);
    }));

    const data: Buffer.Buffer = await p;
    const r = JSON.parse(data.toString());

    if (!r.enabled) {
        return {
            notFound: true,
            revalidate: 5,
        }
    }

    return {
        props: {},
        revalidate: 5,
    }
}

const Detail: FC = ({}) => {
    return (
        <div>
            Available
        </div>
    )
}

export default Detail;
