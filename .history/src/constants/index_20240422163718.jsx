import { BotMessageSquare } from 'lucide-react'
import { BatteryCharging } from 'lucide-react'
import { Fingerprint } from 'lucide-react'
import { ShieldHalf } from 'lucide-react'
import { PlugZap } from 'lucide-react'
import { GlobeLock } from 'lucide-react'

import logo from '../assets/logo.png'
import user2 from '../assets/profile-pictures/user2.jpg'
import user3 from '../assets/profile-pictures/user3.jpg'
import user4 from '../assets/profile-pictures/user4.jpg'
import user5 from '../assets/profile-pictures/user5.jpg'
import user6 from '../assets/profile-pictures/user6.jpg'

export const navItems = [
  { label: 'Triangle Theorem', href: '#workflow' },
  { label: 'Our project', href: '#workflow' },
  { label: 'Contributors', href: '#testimonials' },
]

export const testimonials = [
  {
    user: 'Luna Ahmetspahić',
    company: 'Prva privatna osnovna škola "Isa-beg Ishaković"',
    image: logo,
    text: 'I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.',
  },
  {
    user: 'Berina Mujezin',
    company: 'Prva privatna osnovna škola "Isa-beg Ishaković"',
    image: logo,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: 'Bianka Anić',
    company: 'Prva privatna osnovna škola "Isa-beg Ishaković"',
    image: logo,
    text: 'Working with this company was a pleasure. Their attention to detail are commendable.',
  },
  // {
  //   user: "Ronee Brown",
  //   company: "Fusion Dynamics",
  //   image: user4,
  //   text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
  // },
  // {
  //   user: "Michael Wilson",
  //   company: "Visionary Creations",
  //   image: user5,
  //   text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  // },
  // {
  //   user: "Emily Davis",
  //   company: "Synergy Systems",
  //   image: user6,
  //   text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  // },
]

export const features = [
  {
    icon: <BotMessageSquare />,
    text: 'Triangle Sum Theorem - The sum of the 3 angles in a triangle is always 180°.',
    description: 'Suppose ABC is a triangle, then as per this theorem ∠A + ∠B + ∠C = 180°',
  },
  {
    icon: <Fingerprint />,
    text: 'The measure of the exterior angle of a triangle is equal to the sum of the corresponding interior angles.',
    description:
      'For a triangle, ABC, ∠1, ∠2 and ∠3 are interior angles. And ∠4, ∠5 and ∠6 are the three exterior angles.',
  },
  {
    icon: <ShieldHalf />,
    text: 'The sum of an interior angle and its adjacent exterior angle is 180°',
    description: '',
    // 'Jumpstart your VR projects with a variety of built-in templates for different types of applications and environments.',
  },
  {
    icon: <BatteryCharging />,
    text: 'Exterior Angle Theorem',
    description:
      'An exterior angle of a triangle is equal to the sum of the two opposite interior angles',
    // 'Preview your VR application in real-time as you make changes, allowing for quick iterations and adjustments.',
  },
  {
    icon: <PlugZap />,
    text: 'Sum of exterior angles in a polygon',
    description: 'The sum of the measures of the exterior angles of any triangle is 360 degrees.',
  },
  {
    icon: <GlobeLock />,
    text: 'Sum of the interior and exterior angle is equal to 180°',
    description:
      'Each exterior angle and its corresponding interior angle form a linear pair of angles.',
    // 'Gain valuable insights into user interactions and behavior within your VR applications with an integrated analytics dashboard.',
  },
]

export const checklistItems = [
  {
    title: 'Angle Sum Theorem Statement',
    description:
      ' The angle sum theorem states that the sum of all the interior angles of a triangle is 180 degrees.',
  },
  {
    title: 'Exterior Angle Sum Theorem',
    description:
      'An exterior angle of a triangle is equal to the sum of its two interior opposite angles.',
  },
  {
    title: '',
    description: 'Triangle sum theorem holds for all types of triangles.',
  },
  {
    title: '',
    description: 'The sum of all exterior angles of a triangle is equal to 360°.',
  },
  {
    title: '',
    description: 'The sum of all exterior angles of a convex polygon is equal to 360°.',
  },
]

export const pricingOptions = [
  {
    title: 'Free',
    price: '$0',
    features: ['Private board sharing', '5 Gb Storage', 'Web Analytics', 'Private Mode'],
  },
  {
    title: 'Pro',
    price: '$10',
    features: ['Private board sharing', '10 Gb Storage', 'Web Analytics (Advance)', 'Private Mode'],
  },
  {
    title: 'Enterprise',
    price: '$200',
    features: [
      'Private board sharing',
      'Unlimited Storage',
      'High Performance Network',
      'Private Mode',
    ],
  },
]

export const resourcesLinks = [
  { href: '#', text: 'Getting Started' },
  { href: '#', text: 'Documentation' },
  { href: '#', text: 'Tutorials' },
  { href: '#', text: 'API Reference' },
  { href: '#', text: 'Community Forums' },
]

export const platformLinks = [
  { href: '#', text: 'Features' },
  { href: '#', text: 'Supported Devices' },
  { href: '#', text: 'System Requirements' },
  { href: '#', text: 'Downloads' },
  { href: '#', text: 'Release Notes' },
]

export const communityLinks = [
  { href: '#', text: 'Events' },
  { href: '#', text: 'Meetups' },
  { href: '#', text: 'Conferences' },
  { href: '#', text: 'Hackathons' },
  { href: '#', text: 'Jobs' },
]
