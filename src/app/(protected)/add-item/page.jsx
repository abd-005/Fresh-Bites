import AddItemForm from '@/components/AddItemForm';
import Proxy from '../../../../proxy';

export default function ProtectedAddItemPage() {
  return (
    <div className="py-12 bg-slate-50 dark:bg-slate-950 min-h-screen">
      <Proxy>
        <AddItemForm />
      </Proxy>
    </div>
  );
}