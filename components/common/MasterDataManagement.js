// MasterDataManagement.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HiDatabase } from 'react-icons/hi';
import { FaCheckCircle } from 'react-icons/fa';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import AnimatedModal from './AnimatedModal';

const hurdles = [
  'Incorrect And Outdated Master Data Within ERP Systems.',
  'Non-standardized Processes for Master Data Creation and Updates.',
  'Manual processes lacking proper data validation, approvals and tracking.',
  'Poor Data Integrity And Scalability Issues Resulting From Inconsistent And Duplicate Data. '
];

const advantages = [
  {
    title: 'Operational Efficiencies',
    desc: 'Standardized MDM creation and update processes and clear approval workflows governed by TATs and SLAs helps eliminate bottlenecks and speeds up MDM operations.'
  },
  {
    title: 'Easier Rollouts',
    desc: 'With a single source of truth for MDM, organizations can effectively scale their operations by seamlessly integrating with third-party applications. This reduces the need for extensive data cleansing, enabling faster rollouts and smoother deployments.'
  },
  {
    title: 'Reduction in Overall IT Cost',
    desc: 'A centralized MDM process reduces reliance on individual stakeholders, streamlines operations, and drives overall cost savings.'
  },
  //   {
  //     title: 'Ease to Business',
  //     desc: 'Users can submit and track MDM requests for better experience and visibility.'
  //   }
];

const steps = [
  {
    title: 'Data Governance Setup',
    desc: 'Define clear policies and standards for creation, modification, and deletion of master data.'
  },
  {
    title: 'Data Modeling',
    desc: 'Establish the structure, relationships, and business rules for master data entities.'
  },
  {
    title: 'Data Collection & Validation',
    desc: 'Gather data from various source to ensure accuracy and completeness by performing checks for missing values, format errors, and inconsistencies.'
  },
  {
    title: 'Data Approval & Release',
    desc: 'Ensure that only accurate, validated, and authorized master data is made available for use across the organization and properly created or updated in the core system.'
  },
  {
    title: 'Data Distribution',
    desc: 'Deliver validated and approved master data from the central MDM system to all relevant downstream systems.'
  },
  {
    title: 'Data Maintenance',
    desc: 'Manage, update, correct, and retire master data continuously to ensure its accuracy, consistency, and relevance over time.'
  }
];

const pieData = [
  {
    name: 'Define clear policies and standards for creation, modification, and deletion of master data.',
    value: 16,
    desc: 'Data Governance Setup'
  },
  {
    name: 'Establish the structure, relationships, and business rules for master data entities.',
    value: 16,
    desc: 'Data Modeling'
  },
  {
    name: 'Gather data from various source to ensure accuracy and completeness by performing checks for missing values, format errors, and inconsistencies.',
    value: 16,
    desc: 'Data Collection & Validation'
  },
  {
    name: 'Ensure that only accurate, validated, and authorized master data is made available for use across the organization and properly created or updated in the core system.',
    value: 16,
    desc: 'Data Approval & Release'
  },
  {
    name: 'Deliver validated and approved master data from the central MDM system to all relevant downstream systems.',
    value: 16,
    desc: 'Data Distribution'
  },
  {
    name: 'Manage, update, correct, and retire master data continuously to ensure its accuracy, consistency, and relevance over time.', value: 16,
    desc: 'Data Maintenance'
  }
];

const COLORS = ['#6366f1', '#ec4899', '#10b981', '#f59e0b', '#3b82f6', '#ef4444'];

const CustomTooltip = ({ active, payload }) => {
 

  if (active && payload && payload.length) {
    const { name, desc } = payload[0].payload;
    return (
      <div className="bg-white border shadow-md rounded-md p-3 max-w-xs">
        <p className="text-sm font-semibold text-blue-600">{name}</p>
        <p className="text-xs text-gray-700">{desc}</p>
      </div>
    );
  }

  return null;
};

export default function MasterDataManagement() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);


  const openModal = () => {
    setIsModalOpen(true);
    setIsClosing(false);
  };

  const closeModal = () => {
    setIsClosing(true);
    setTimeout(() => {
        setIsModalOpen(false);
    }, 500);
}
  return (
    <section id="MDM" className="mx-5 md:mx-[4em] mb-[2em] lg:mb-[5em] md:mb-[5em] xl:mb-[5em] shadow-lg rounded-md bg-gradient-to-r from-blue-100 to-teal-100  md:p-[3em] p-[2em]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl font-extrabold text-gray-800 mt-4">Master Data Management</h2>
          <p className="text-gray-800 mt-4 text-md max-w-7xl text-xl mx-auto">
            Master Data Management (MDM) is the process of consolidating and maintaining a single, high-quality record for customers, products, suppliers, and other key entities within a business by integrating data from various sources.
            This unified master data provides a reliable and consistent foundation for accurate reporting, reduced errors, elimination of redundancy, and informed decision-making across an organization.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold text-orange mb-6">When MDM is Missing: Key Business Hurdles</h3>
            <ul className="space-y-4 text-gray-800">
              {hurdles.map((item, i) => (
                <li key={i} className="flex items-start text-lg">
                  <FaCheckCircle className="text-rose-500 mt-1 mr-3" size={18} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          // className=" rounded-xl shadow-lg"
          >
            <ResponsiveContainer width="100%" height={280}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={80}
                  outerRadius={100}
                  fill="#82ca9d"
                  dataKey="value"
                  label={({ index }) => pieData[index].desc}
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
              </PieChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        <div className="mb-24">
          <h3 className="text-2xl font-semibold text-center mb-4">Key Advantages of Master Data Management</h3>
          <p className="text-gray-800  text-md max-w-7xl text-center justify-center m-auto mb-12">
            By providing a single source of truth for critical business information, the MDM solution eliminates data issues such as redundancies and errors. This delivers high-quality data that can be utilized across the organization, leading to reduced operational challenges, better compliance, enhanced scalability, and improved user experience.
          </p>
          <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-8">
            {advantages.map((adv, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-pink-100 via-white to-indigo-100 p-6 rounded-2xl shadow-xl text-center"
              >
                <h4 className="text-xl font-bold text-sky-600 mb-2">{adv.title}</h4>
                <p className="text-gray-700 text-sm leading-relaxed">{adv.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className='mb-24'>
          <h3 className="text-2xl font-semibold text-center mb-4">Solution Highlights & Technology Stack</h3>
          <p className="text-gray-800  text-md max-w-7xl text-center justify-center m-auto mb-12">
            The Master Data Management solution addresses key business challenges by standardizing master data across departments. It follows a structured six-step process</p>
          <div className="grid md:grid-cols-3 gap-10">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white border-l-8 border-rose-400 p-6 shadow-md rounded-xl"
              >
                <h4 className="text-lg font-bold text-rose-600 mb-2">{i + 1}. {step.title}</h4>
                <p className="text-gray-700 text-sm">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-center mb-4">Master Data Management Categories</h3>
          <p className="text-gray-800 text-md max-w-4xl text-center m-auto mb-12">
            MDM is organized into domains, with commonly used master data types including
          </p>

          <div className="flex flex-col items-center space-y-6 md:space-y-10">
            {/* Tree Root */}
            <div className="bg-white py-4 px-10 rounded-full shadow-md text-center font-semibold text-sm">
              Types of Master Data
            </div>

            {/* Connecting Line */}
            <div className="w-[2px] h-4 bg-gray-400 md:hidden" />
            <div className="hidden md:block w-[2px] h-6 bg-gray-400" />

            {/* Nodes */}
            <div className="flex flex-col md:flex-row md:flex-wrap md:justify-center gap-4 md:gap-6">
              {[
                { label: 'Customer Master', color: 'bg-red-200', icon: '👤' },
                { label: 'Product Master', color: 'bg-green-200', icon: '📦' },
                { label: 'Supplier Master', color: 'bg-yellow-200', icon: '🚚' },
                { label: 'Employee Master', color: 'bg-gray-400', icon: '👥' },
                { label: 'Location Master', color: 'bg-blue-200', icon: '📍' },
                { label: 'Item Master', color: 'bg-sky-200', icon: '🖥️' },
                { label: 'Finance Master', color: 'bg-purple-200', icon: '💵' },
                { label: 'Pricing Master', color: 'bg-indigo-200', icon: '🏷️' },
                { label: 'Asset Master', color: 'bg-pink-200', icon: '💼' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.03 }}
                  className={`rounded-lg shadow-md w-[220px] py-3 px-4 flex items-center gap-3 ${item.color}`}
                >
                  <span className="text-lg">{item.icon}</span>
                  <span className="text-sm font-medium">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </div>

      <div className="my-4">
        <button className="px-5 w-[80%] xl:w-[20%] sm:w-[100%] md:w-[20%] lg:w-[20%]  pt-2 pb-2 mt-10 border-orange border-2 text-orange hover:text-black rounded-full hover:bg-orange 
                            font-medium text-sm"
          onClick={openModal}
        >
          Download Brochure
        </button>

      </div>

      {isModalOpen && (
        <AnimatedModal
          closeModal={closeModal}
          isClosing={isClosing}
          filePath={"/images/Brochure/MDM-Whitepaper_BPAAS_Solutions.pdf"}
          HeadingText={(
            <>
              <span className="text-black">Download</span>
              {' '}
              <span className="text-orange">Brochure</span>
            </>
          )}
        />
      )}
    </section>
  );
}
