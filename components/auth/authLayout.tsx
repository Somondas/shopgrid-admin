import { Image } from "@nextui-org/react";
import { Divider } from "@nextui-org/divider";

interface Props {
  children: React.ReactNode;
}

export const AuthLayoutWrapper = ({ children }: Props) => {
  return (
    <div className="flex h-screen">
      <div className="flex-1 flex-col flex items-center justify-center p-6">
        <div className="md:hidden absolute left-0 right-0 bottom-0 top-0 z-0">
          <Image
            className="w-full h-full"
            src="https://nextui.org/gradients/docs-right.png"
            alt="gradient"
          />
        </div>
        {children}
      </div>

      <div className="hidden my-10 md:block">
        <Divider orientation="vertical" />
      </div>

      <div className="hidden md:flex flex-1 relative flex items-center justify-center p-6">
        <div className="absolute left-0 right-0 bottom-0 top-0 z-0">
          <Image
            className="w-full h-full"
            src="https://nextui.org/gradients/docs-right.png"
            alt="gradient"
          />
        </div>

        <div className="z-10">
          <h1 className="font-bold text-[45px]">ShopGrid Dashboad</h1>
          <div className="font-light text-slate-400 mt-4">
            The admin role is designated for trusted team members to efficiently
            manage the ShopGrid application and its users. As an admin, you have
            exclusive access to the dashboard, allowing you to:
            <ul className="list-disc pl-4 my-2">
              <li>Oversee and manage user accounts and their activity.</li>
              <li>Monitor and maintain app data and configurations.</li>
              <li>
                Perform administrative tasks to ensure the smooth operation of
                ShopGrid.
              </li>
              <li>
                Access sensitive and critical functionalities restricted to team
                members.
              </li>
            </ul>
            Admins are responsible for maintaining the integrity and security of
            the platform while ensuring compliance with organizational policies.
          </div>
        </div>
      </div>
    </div>
  );
};
