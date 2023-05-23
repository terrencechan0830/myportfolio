import React from "react";
import { motion } from 'framer-motion'
import { azureadministrator, azuredeveloper, azuredevopsengineer, sasbaseprogrammingspecialist, tableaudesktopspecialist } from "../../assets/index"
import CertificateCard from "./CertificateCard";

const Achievement = () => {
    const certs = [
        {
            id: 1,
            title: 'Azure Devops Engineer',
            logo: azuredevopsengineer,
            des: 'https://www.credly.com/badges/cdc8f3c2-77fb-49ae-a976-e301bf7f6dae/public_url',
        },
        {
            id: 2,
            title: 'Azure Administrator',
            logo: azureadministrator,
            des: 'https://www.credly.com/badges/b0879b2d-8317-413b-ab74-205efaa0fee3/public_url',
        },
        {
            id: 3,
            title: 'Azure Developer',
            logo: azuredeveloper,
            des: 'https://www.credly.com/badges/d825b8ad-f589-4e71-9fdb-c81215163e63/public_url',
        },
        {
            id: 4,
            title: 'Tableau Desktop Specialist',
            logo: tableaudesktopspecialist,
            des: 'https://www.credly.com/badges/918d7922-5d74-423d-8d58-7bcc6b634a8f/public_url'
        },
        {
            id: 5,
            title: 'SAS Base Programming Specialist',
            logo: sasbaseprogrammingspecialist,
            des: 'https://www.credly.com/badges/0e2ef64a-2680-41e8-910c-3e54ade9470c/public_url'
        }
      ];

  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1, transition:{duration:.5}}}>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
            <h2 className="text-3xl md:text-4xl font-bold">Certificates</h2>
        </div>
        <div className='mt-14 w-full h-[900px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10'>
            {certs.map((cert) => (
                <CertificateCard
                key={cert.id}
                title={cert.title}
                logo={cert.logo}
                des={cert.des}
                />
            ))}
        </div>
    </motion.div>
  );
};

export default Achievement;