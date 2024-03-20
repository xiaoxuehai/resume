import { MapPin, Mail, Phone, BriefcaseBusiness } from 'lucide-react';
import { Metadata } from 'next';

import NextImage from 'next/image';

import { Card, CardHeader, CardContent } from '@/components/ui/card';

import { Section } from '@/components/ui/section';

import { RESUME_DATA } from '@/data/resume-data';
export const metadata: Metadata = {
  title: `${RESUME_DATA.name} | ${RESUME_DATA.position}`,
  description: RESUME_DATA.summary,
};

export default function Page() {
  return (
    <main className='container relative mx-auto scroll-my-12 overflow-auto p-4 md:p-16 print:p-12'>
      <section className='mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-6'>
        <div className='flex items-end justify-between'>
          <div className='flex-1 space-y-1.5'>
            <div className='flex items-end'>
              <h1 className='text-2xl font-semibold leading-8'>
                {RESUME_DATA.name}
              </h1>
              <p className='ml-3 max-w-md font-mono text-sm leading-6 text-zinc-600'>
                {RESUME_DATA.position}
              </p>
            </div>
            <div className='flex max-w-md items-center gap-4 text-pretty pt-1 font-mono text-sm text-zinc-600'>
              <div className='inline-flex items-center gap-x-1 align-baseline leading-none hover:underline'>
                <MapPin className='size-3' />
                {RESUME_DATA.location}
              </div>

              <div className='inline-flex items-center gap-x-1 align-baseline leading-none hover:underline'>
                <Phone className='size-3' />
                {RESUME_DATA.contact.tel}
              </div>
              <div className='inline-flex items-center gap-x-1 align-baseline leading-none hover:underline'>
                <Mail className='size-3' />
                {RESUME_DATA.contact.email}
              </div>
              <div className='inline-flex items-center gap-x-1 align-baseline leading-none hover:underline'>
                <BriefcaseBusiness className='size-3' />
                {RESUME_DATA.workYear}工作经验
              </div>
            </div>
          </div>

          <NextImage
            alt={RESUME_DATA.name}
            src={RESUME_DATA.avatarUrl}
            width={80}
            height={110}
            className='rounded-md'
          ></NextImage>
        </div>
        <Section>
          <h2 className='border-l-[3px] border-zinc-600 pl-2 text-xl font-semibold leading-6'>
            教育经历
          </h2>
          {RESUME_DATA.education.map(education => (
            <Card key={education.school}>
              <CardHeader>
                <div className='flex items-center justify-between gap-x-2 text-base'>
                  <div className='flex items-center'>
                    <h3 className='font-semibold leading-none'>
                      {education.school}
                    </h3>
                    <span className='mx-2'>-</span>
                    <span className='text-sm'>{education.tips}</span>
                  </div>
                  <div className='text-sm tabular-nums text-gray-500'>
                    {education.start} - {education.end}
                  </div>
                </div>
              </CardHeader>
              <CardContent className='mt-2'>{education.degree}</CardContent>
            </Card>
          ))}
        </Section>

        <Section>
          <h2 className='border-l-[3px] border-zinc-600 pl-2 text-xl font-semibold leading-6'>
            个人技能
          </h2>
          <div className='flex flex-col gap-y-1'>
            <ul className='list-disc pl-4'>
              {RESUME_DATA.skills.map(skill => (
                <li
                  className='text-pretty font-mono text-sm leading-6 text-zinc-600'
                  key={skill}
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </Section>
        <Section>
          <h2 className='border-l-[3px] border-zinc-600 pl-2 text-xl font-semibold leading-6'>
            工作经历
          </h2>
          {RESUME_DATA.work.map(work => (
            <Card key={work.company}>
              <CardHeader>
                <div className='flex items-center justify-between gap-x-2 text-base'>
                  <h3 className='inline-flex items-center justify-center gap-x-1 font-semibold leading-none'>
                    <a className='hover:underline' href={work.link}>
                      {work.company}
                    </a>
                  </h3>
                  <div className='text-sm tabular-nums text-gray-500'>
                    {work.start} - {work.end}
                  </div>
                </div>

                <h4 className='pt-1 font-mono text-sm leading-none'>
                  {work.title}
                </h4>
              </CardHeader>
              <CardContent className='mt-2 text-sm'>
                <ul className='list-disc pl-4'>
                  {work.descriptions.map(description => (
                    <li
                      className='text-pretty font-mono text-sm leading-6 text-zinc-600'
                      key={description}
                    >
                      {description}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </Section>

        <Section>
          <h2 className='border-l-[3px] border-zinc-600 pl-2 text-xl font-semibold leading-6'>
            项目经历
          </h2>
          {RESUME_DATA.projects.map(project => (
            <Card key={project.title}>
              <CardHeader>
                <div className='flex items-center justify-between gap-x-2 text-base'>
                  <div className='flex items-center'>
                    <h3 className='font-semibold leading-none'>
                      {project.title}
                    </h3>
                  </div>
                </div>
              </CardHeader>
              <CardContent className='mt-2'>
                <ul className='list-disc pl-4'>
                  {project.descriptions.map(description => (
                    <li
                      className='text-pretty font-mono text-sm leading-6 text-zinc-600'
                      key={description}
                    >
                      {description}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </Section>

        <Section>
          <h2 className='border-l-[3px] border-zinc-600 pl-2 text-xl font-semibold leading-6'>
            个人总结
          </h2>
          <p className='text-pretty font-mono text-sm text-zinc-600'>
            {RESUME_DATA.summary}
          </p>
        </Section>
      </section>
    </main>
  );
}
