import { ContactsResponse } from '../types/contact'

// ==================== FILE: data/demoContacts.json ====================
export const demoContactsData: ContactsResponse = {
  data: {
    contracts: [
      {
        _id: '1',
        fullName: 'Jane Smith',
        email: 'jane.smith@email.com',
        phoneNumber: '+1 (555) 123-4567',
        occupation: 'Software Engineer',
        message:
          "I'm interested in learning more about your grant programs for technology startups. Could you provide more information about the application process and eligibility criteria?",
        status: 'New',
        createdAt: '2025-01-08T10:30:00Z',
        updatedAt: '2025-01-08T10:30:00Z',
      },
      {
        _id: '2',
        fullName: 'John Doe',
        email: 'john.doe@business.com',
        phoneNumber: '+1 (555) 234-5678',
        occupation: 'Business Owner',
        message:
          "My small business is looking to expand and I'd like to know if there are any grants available for business development. We're particularly interested in digital transformation funding.",
        status: 'Respond',
        createdAt: '2025-01-07T14:20:00Z',
        updatedAt: '2025-01-07T16:45:00Z',
      },
      {
        _id: '3',
        fullName: 'Alice Johnson',
        email: 'alice.j@nonprofit.org',
        phoneNumber: '+1 (555) 345-6789',
        occupation: 'Non-profit Director',
        message:
          "Our organization focuses on community development. We're seeking funding opportunities for our upcoming project that aims to improve local infrastructure. When is the next application cycle?",
        status: 'New',
        createdAt: '2025-01-07T09:15:00Z',
        updatedAt: '2025-01-07T09:15:00Z',
      },
      {
        _id: '4',
        fullName: 'Robert Williams',
        email: 'rwilliams@education.edu',
        phoneNumber: '+1 (555) 456-7890',
        occupation: 'Education Coordinator',
        message:
          "I'm reaching out on behalf of our educational institution. We're developing an innovative curriculum program and would appreciate guidance on available education grants.",
        status: 'New',
        createdAt: '2025-01-06T11:00:00Z',
        updatedAt: '2025-01-06T11:00:00Z',
      },
      {
        _id: '5',
        fullName: 'Emily Davis',
        email: 'emily.davis@arts.org',
        phoneNumber: '+1 (555) 567-8901',
        occupation: 'Artist & Cultural Manager',
        message:
          "I represent a collective of local artists and we're interested in applying for arts and culture grants. Could we schedule a consultation to discuss our project proposal?",
        status: 'Respond',
        createdAt: '2025-01-06T08:30:00Z',
        updatedAt: '2025-01-06T15:20:00Z',
      },
      {
        _id: '6',
        fullName: 'Michael Brown',
        email: 'mbrown@greentech.com',
        phoneNumber: '+1 (555) 678-9012',
        occupation: 'Environmental Consultant',
        message:
          "We're working on a sustainability project focused on renewable energy. Are there any environmental grants currently accepting applications? Our project aligns with climate action goals.",
        status: 'New',
        createdAt: '2025-01-05T13:45:00Z',
        updatedAt: '2025-01-05T13:45:00Z',
      },
      {
        _id: '7',
        fullName: 'Sarah Miller',
        email: 'sarah.m@healthcare.com',
        phoneNumber: '+1 (555) 789-0123',
        occupation: 'Healthcare Administrator',
        message:
          "Our healthcare facility is looking to implement new patient care technologies. We'd like to explore available healthcare innovation grants and understand the application timeline.",
        status: 'New',
        createdAt: '2025-01-05T10:20:00Z',
        updatedAt: '2025-01-05T10:20:00Z',
      },
      {
        _id: '8',
        fullName: 'David Lopez',
        email: 'dlopez@research.edu',
        phoneNumber: '+1 (555) 890-1234',
        occupation: 'Research Scientist',
        message:
          "I'm conducting research in biotechnology and need funding support. What documentation is required for the grant application? Also, is there a maximum funding amount per project?",
        status: 'Respond',
        createdAt: '2025-01-04T15:00:00Z',
        updatedAt: '2025-01-04T17:30:00Z',
      },
    ],
    pagination: {
      currentPage: 1,
      totalPages: 1,
      totalData: 8,
      hasNextPage: false,
      hasPrevPage: false,
    },
  },
}
