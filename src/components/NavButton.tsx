export const NavButton = (props: { name: string; page: string }) => {
  return (
    <button
      className={`
                  relative rounded-md px-4 py-2 text-sm font-medium transition-all 
                  
                  hover:bg-[var(--bg-hover)]
                `}
    >
      {props.name}
      {/* currentPage === props.page && (
                  <span className="absolute bottom-0 left-1/2 h-0.5 w-6 -translate-x-1/2 rounded-full bg-[var(--accent-red)]" />
                )*/}
    </button>
  );
};

{
  /*${
                    currentPage === props.page
                      ? "text-[var(--text-primary)]"
                      : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                  }
*/
}
