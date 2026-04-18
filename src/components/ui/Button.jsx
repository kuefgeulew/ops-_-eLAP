/**
 * Thin wrapper around `<button>` so shared classes stay in one place.
 */
function Button({ className = '', type = 'button', ...props }) {
  return <button type={type} className={className} {...props} />
}

export default Button

