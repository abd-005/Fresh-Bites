import AddItemForm from '@/components/forms/AddItemForm';
import Proxy from '../../../../proxy';

export default function ProtectedAddItemPage() {
  return (
    <div className="py-12 bg-stone-50 dark:bg-stone-950 min-h-screen">
      <Proxy>
        <AddItemForm />
      </Proxy>
    </div>
  );
}