import React from "react"

import LIcon from "../../../../images/icons/L.svg"
import RIcon from "../../../../images/icons/R.svg"
import "./Paginator.scss"

type PaginatorProps = {
  pages: number
  currentPage: number
  setCurrentPage: Function
}

export const Paginator = ({ pages, currentPage, setCurrentPage }: PaginatorProps) => {
  return (
    <div className="paginator">
      <img
        src={LIcon}
        className="paginator__icon"
        alt={"Paginator icon left"}
        onClick={() => setCurrentPage(currentPage - 1)}
      />

      {Array.from(Array(pages).keys()).map((i) => (
        <div className={"paginator__dot" + (i === currentPage ? " warning" : "")} />
      ))}

      <img
        src={RIcon}
        className="paginator__icon"
        alt={"Paginator icon right"}
        onClick={() => setCurrentPage(currentPage + 1)}
      />
    </div>
  )
}

export default Paginator
