/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useCallback } from "react"
import { Menu, Transition } from "@headlessui/react"
import { Link, useHistory } from "react-router-dom"
function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ")
}

interface DropProps {
  user: string
  balance: number
}
const DropDownMenu: React.FC<DropProps> = ({ user, balance }) => {
  const history = useHistory()
  const handleOnClick = useCallback(() => {
    localStorage.clear()
    history.push("/login")
  }, [history])

  return (
    <Menu as="div" className="relative inline-block text-left bg-secondary-500">
      <div>
        <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white border border-gray-300 rounded-md shadow-sm bg-trasnparent hover:bg-secondary-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-yellow-500">
          {user}
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right rounded-md shadow-lg bg-secondary-500 ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <p
                  className={classNames(
                    "block px-4 py-2 text-sm text-center text-yellow-200 "
                  )}
                >
                  {`Balance: $${balance}`}
                </p>
              )}
            </Menu.Item>

            <Menu.Item>
              {({ active }) => (
                <Link
                  to="/settings"
                  className={classNames(
                    active ? "bg-secondary-600 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm hover:text-secondary-500"
                  )}
                >
                  <p className="text-center text-blue-50"> Account settings</p>
                </Link>
              )}
            </Menu.Item>

            <div>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className="items-center w-full"
                    onClick={handleOnClick}
                  >
                    <div
                      className={classNames(
                        active
                          ? "bg-secondary-600 text-gray-900"
                          : "text-gray-700",
                        "block w-full  px-4 py-2 text-sm text-center items-center mx-auto"
                      )}
                    >
                      <p className=" text-blue-50"> Log out</p>
                    </div>
                  </button>
                )}
              </Menu.Item>
            </div>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default DropDownMenu
