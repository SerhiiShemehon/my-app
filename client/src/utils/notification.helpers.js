import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const notify = (text, id) => toast.success(text, {
  position: 'bottom-right',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'dark',
  toastId: id
});

export default notify;