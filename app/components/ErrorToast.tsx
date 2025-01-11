interface ErrorToastProps {
  message: string
}

export default function ErrorToast({ message }: ErrorToastProps) {
  return (
    <div className="fixed bottom-4 left-4 bg-red-500 text-white px-4 py-2 rounded-md shadow-md">
      {message}
    </div>
  )
}

