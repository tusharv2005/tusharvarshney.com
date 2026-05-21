export function TusharMark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 512 256"
      aria-hidden
      {...props}
    >
      <path
        fill="currentColor"
        d="M0 0h192v64h-64v128h32v64H32v-64h32V64H0ZM256 0v64h32v64h32v64h32v64h64v-64h32v-64h32v-64h32v-64h-64v64h-32v64h-64v-64h-32v-64Z"
      />
    </svg>
  )
}

export function getMarkSVG() {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 512 256"><path fill="currentColor" d="M0 0h192v64h-64v128h32v64H32v-64h32V64H0ZM256 0v64h32v64h32v64h32v64h64v-64h32v-64h32v-64h32v-64h-64v64h-32v64h-64v-64h-32v-64Z"/></svg>`
}
