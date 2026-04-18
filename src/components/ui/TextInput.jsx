/**
 * Thin wrapper around `<input>` for shared styling.
 */
function TextInput({ className = '', ...props }) {
  return <input className={className} {...props} />
}

export default TextInput

