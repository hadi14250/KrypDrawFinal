import React from "react";
import { Input, InputProps } from "../ui/input";
import { cn } from "@/lib/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const PasswordInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    const [isEyeOpen, setIsEyeOpen] = React.useState(false);

    return (
      <div className="flex items-center relative">
        <Input {...props} type={isEyeOpen ? "text" : "password"} ref={ref} />
        <button
          className="absolute right-3"
          type="button"
          onClick={() => setIsEyeOpen((prev) => !prev)}
        >
          <FontAwesomeIcon icon={isEyeOpen ? faEyeSlash : faEye} />
        </button>
      </div>
    );
  }
);

PasswordInput.displayName = "PasswordInput";

export { PasswordInput };
