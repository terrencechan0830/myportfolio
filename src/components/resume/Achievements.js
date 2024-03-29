import React from "react";
import { motion } from 'framer-motion'
import { azuredevopsengineer, azuresolutionsarchitect, sasbaseprogrammingspecialist, tableaudesktopspecialist } from "../../assets/index"
import CertificateCard from "./CertificateCard";

const Achievement = () => {
    const certs = [
        {
            id: 1,
            title: 'Microsoft Azure Solutions Architect',
            logo: azuresolutionsarchitect,
            issuer: 'Microsoft',
            issuedt: 'Jul 2023',
            url: 'https://www.credly.com/badges/fdb3deed-94d7-42c7-9a3f-0bb0b7d13c6b/public_url',
        },
        {
            id: 2,
            title: 'Microsoft Azure Devops Engineer',
            logo: azuredevopsengineer,
            issuer: 'Microsoft',
            issuedt: 'Apr 2023',
            url: 'https://www.credly.com/badges/cdc8f3c2-77fb-49ae-a976-e301bf7f6dae/public_url',
        },
        // {
        //     id: 2,
        //     title: 'Microsoft Azure Administrator',
        //     logo: azureadministrator,
        //     issuer: 'Microsoft',
        //     issuedt: 'Feb 2023',
        //     url: 'https://www.credly.com/badges/b0879b2d-8317-413b-ab74-205efaa0fee3/public_url',
        // },
        {
            id: 3,
            title: 'SAS Base Programming Specialist',
            logo: sasbaseprogrammingspecialist,
            issuer: 'SAS',
            issuedt: 'Nov 2022',
            url: 'https://www.credly.com/badges/0e2ef64a-2680-41e8-910c-3e54ade9470c/public_url'
        },
        {
            id: 4,
            title: 'Tableau Desktop Specialist',
            logo: tableaudesktopspecialist,
            issuer: 'Tableau',
            issuedt: 'Mar 2020',
            url: 'https://www.credly.com/badges/918d7922-5d74-423d-8d58-7bcc6b634a8f/public_url'
        }
      ];

  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1, transition:{duration:.5}}}>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
            <h2 className="text-3xl text-center md:text-4xl font-bold">Certificates & Qualifications</h2>
        </div>
        <div className='mt-6 w-full h-[900px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10'>
            {certs.map((cert) => (
                <CertificateCard
                key={cert.id}
                title={cert.title}
                logo={cert.logo}
                issuer={cert.issuer}
                issuedt={cert.issuedt}
                url={cert.url}
                />
            ))}
        </div>
    </motion.div>
  );
};

export default Achievement;