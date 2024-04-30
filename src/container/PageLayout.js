import React from 'react'
import { lazy,Suspense } from 'react'
import { Route,Routes } from 'react-router-dom'
const PageContent=lazy(()=>import('./PageContent'))
 
const PageLayout = (children) => {
  return (
   <>
    <PageContent/>
   </>
  )
}

export default PageLayout
